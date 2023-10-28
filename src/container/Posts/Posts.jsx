import React, { Component } from 'react'
import Post from '../../components/Post/Post';
import postsStyle from './posts.module.css'
import { Loading } from '../../components/UI/Loading/Loading';
import NotFound from '../../assets/image/search-bar.gif'
export default class Posts extends Component {

    state = {
        showLoading: true,
        posts: null,
        search: ""
    }

    componentDidMount() {
        const UNSPLASH_API_URL = `https://api.unsplash.com/photos/?client_id=UL0TYCn-Sya6Err5ivn2FMNe5nRmG8_KQmxUeeXpmsI`
        fetch(UNSPLASH_API_URL).then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    this.setState({
                        posts: data,
                        showLoading: false
                    })
                }, 2000)

            })
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
            fetch(
                `https://api.unsplash.com/search/photos?` +
                `query=${this.state.search}&` +
                `per_page=50&` +
                `client_id=UL0TYCn-Sya6Err5ivn2FMNe5nRmG8_KQmxUeeXpmsI`
            )
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        posts: data.results,
                        showLoading: false
                    });
                });
        }
    }

    render() {
        let posts = null;
        if (this.state.posts) {
            if (this.state.posts.length) {
                posts = this.state.posts.map(item => {
                    return <Post key={item.id} post={item} />
                })
            } else {
                posts= <img src={NotFound} alt="not found" />
            }

        }

        let loading = null;
        if (this.state.showLoading) {
            loading = (
                <Loading>
                    <span className={postsStyle.loader}></span>
                </Loading>);
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
                <div className={postsStyle.posts}>
                    {posts}
                    {loading}
                </div>
            </>
        )
    }
}
