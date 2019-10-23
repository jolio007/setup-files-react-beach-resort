import React, { Component } from 'react'
import Title from './Title';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

export default class Services extends Component {
state={
    services:[{

        icon: <FaCocktail/>,
        title: "free cocktails",
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa ligula, interdum id posuere quis, egestas in neque.'
        },
        {

        icon: <FaHiking/>,
        title: "Endless Hiking",
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa ligula, interdum id posuere quis, egestas in neque.'
        },
        {

            icon: <FaShuttleVan/>,
            title: "Free shuttle",
            info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa ligula, interdum id posuere quis, egestas in neque.'
        },
        {

            icon: <FaBeer/>,
            title: "Strongest Beer",
            info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa ligula, interdum id posuere quis, egestas in neque.'
        }
    ]
}
    render() {
        return (
            <section className="services">
                <Title title={'services'}></Title>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
            
            
        )
    }
}
