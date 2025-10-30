import React from "react"
import "./BlogArticle.css"

class BlogArticle extends React.Component {
    // this.props is object
    // it is an attribute of all components

    render() { // obligatory method for react component

        // JSX code allows use to write HTML without quotation marks
        let likes = <p>this article has received { 5 + 5 } likes</p>
        return (
            <article style={
                {
                    backgroundColor: "red",
                }
            } className="box">
                <h2>{this.props.article.title}</h2>
                <p>blah blah</p>
                <p>Author: {this.props.article.author}</p>
                <button>Like</button> 
                {likes}
                <button>Mark as read</button>
            </article>
        )
    }
}

export default BlogArticle