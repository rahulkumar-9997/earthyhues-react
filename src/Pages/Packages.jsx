import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Packages() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.earthyhues.com/api-packages');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching Package:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <section className="page-header">
                <div className="page-header__bg" />
                <div className="container">
                    <div className="page-header__breadcrumb-box">
                        <ul className="trevlo-breadcrumb">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>Packages</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='my-5 mx-5'>
                <div className="container">
                    <div className="row">
                        {data.map((packageData) => (
                            <div className="col-lg-3" key={packageData.package_id}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={packageData.package_img} alt={packageData.package_url} />
                                    <div className="card-body">
                                        <h4 dangerouslySetInnerHTML={{ __html: packageData.package_title }}></h4>
                                        <p className="card-text" dangerouslySetInnerHTML={{ __html: packageData.package_intro.substring(0, 150) }}></p>
                                        <Link to={'/packagesDetail'}>Explore More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Packages;
