import React, { Component } from 'react'
import Post from '../../components/Post/Post';
import postsStyle from './posts.module.css'
import { Loading } from '../../components/UI/Loading/Loading';
import NotFound from '../../assets/image/no-result-2.gif'
import { UNSPLASH_API_URL, UNSPLASH_API_URL_PER_PAGE, UNSPLASH_API_URL_SEARCH } from '../../api/url';
import { Pagination } from '../../components/UI/Pagination/Pagination';
export default class Posts extends Component {

    state = {
        showLoading: true,
        posts: null,
        search: "",
        className: "",
        activePage: 1,
        total: null,
        perPage: 20
    }


    fetchRequest(url) {
        fetch(url).then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    this.setState({
                        posts: data,
                        showLoading: false,
                        total: data.length
                    })
                }, 1000)

            })
    }
    componentDidMount() {
        this.fetchRequest(UNSPLASH_API_URL);
    }

    searchChangeHandler = e => {
        console.log(e.target.value);
        this.setState({
            search: e.target.value
        })
    }

    searchSubmitHandler = e => {
        if (e.which === 13) {
            this.setState({
                showLoading: true,
            });
            if (this.state.search) {
                fetch(UNSPLASH_API_URL_SEARCH(this.state.search))
                    .then(res => res.json())
                    .then(data => {
                        this.setState({
                            posts: data.results,
                            showLoading: false,
                            total: data.total
                        });
                    });
            } else {
                this.fetchRequest(UNSPLASH_API_URL);
            }
        }
    }

    toPage = (i) => {
        this.setState({
            showLoading: true
        });

        fetch(UNSPLASH_API_URL_PER_PAGE(this.state.search, i))
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    this.setState({
                        posts: data.results,
                        showLoading: false,
                    })
                }, 1000)
            })
    }

    render() {
        let posts = null;
        let loading = null;
        let pagination = null;
        let postsClassName = null;

        if (this.state.posts) {
            if (this.state.posts.length) {
                posts = this.state.posts.map(item => {
                    return <Post key={item.id} post={item} />
                })
                postsClassName = postsStyle.posts;
            } else {
                posts = <img src={NotFound} className={postsStyle.not_found} alt="not found" />
                postsClassName = postsStyle.posts_empty
            }

        }

        if (this.state.showLoading) {
            loading = (
                <Loading>
                    <span className={postsStyle.loader}></span>
                </Loading>
            );
        }

        if (this.state.total) {
            pagination = (
                <div className={postsStyle.pagination_holder}>
                    <Pagination toPage={this.toPage} totalPages={this.state.total} />
                </div>
            );
        }
        return (
            <>
                <div className={postsStyle.search_holder}>
                    <input
                        onKeyUp={this.searchSubmitHandler}
                        onChange={this.searchChangeHandler}
                        type="text" placeholder='search...'
                    />
                </div>
                <h1>All Posts</h1>
                <div className={postsClassName}>
                    {posts}
                    {loading}
                </div>
                {pagination}
            </>
        )
    }
}
