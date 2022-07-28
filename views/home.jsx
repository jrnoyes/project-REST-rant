const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/beach.jpg" alt = "Beach" />
                    <div>
                        Photo by <a href="https://unsplash.com/@seefromthesky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ishan @seefromthesky</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href = "/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home