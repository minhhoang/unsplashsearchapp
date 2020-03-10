import React, { useState } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

import './App.css';


const App = () => {
    const [data, setData] = useState([]);
   
    function onSearchSubmit(term) {
        let axiosConfig = {
            params: { query: term },
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
                
            }
        };

        const url = process.env.REACT_APP_API_PROD_URL + `?per_page=20&client_id=` + process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

        axios.get(url, axiosConfig)
            .then((res) => {
                setData(res.data.results);
                // setTotalRecords(res.data.total_pages);
                
            })
            .catch((err) => {
                console.log("Axios error: ", err);
            })
    }
   

    return (
        <div className="App">
            <header className="site-header">
                <h1>Unsplash search</h1>
            </header>


            <main>
                <SearchBar userSubmit={ e => onSearchSubmit(e) }/>

                <div className="search-results">
                    <div className="container">
                        <div className="columns is-multiline">

                            <ImageList images={data} />     

                        </div>

                    </div>
                </div>
            </main>

            <footer>
                <small>&copy; Copyright 2020. Handmade by <a href="http://nguyenquangminhhoang.com" target="_blank" rel="noopener noreferrer">Minh Hoang</a></small>
            </footer>
        </div>
    );
}

export default App;
