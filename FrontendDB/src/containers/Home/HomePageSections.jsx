import React from 'react';
import './styles.css';

export const AboutSectionComponent = () => {
    return (
        <div></div>
    )
}

export const PremiumSectionComponent = () => {
    return (
        <div className="premium-section-container">
            <div className="plans">
                <div className="basic-plan">
                    <div className="plan-image"></div>
                </div>
                <div className="basic-plan plan-info">
                    <h4></h4>
                    <ul>
                        <li>something</li>
                        <li>about</li>
                        <li>this</li>
                    </ul>
                    <div className="plan-start">
                        <a href="/signup" className="get-started">></a>
                    </div>
                </div>
            </div>
            <div className="plans">
                <div className="fancy-plan">
                    <div className="plan-image"></div>
                </div>
                <div className="fancy-plan plan-info">
                    <h4></h4>
                    <ul>
                        <li>something</li>
                        <li>about</li>
                        <li>this</li>
                    </ul>
                    <div className="plan-start">
                        <a href="/signup" className="get-started">></a>
                    </div>
                </div>
            </div>
            <div className="plans">
                <div className="extra-fancy-plan">
                    <div className="plan-image"></div>
                </div>
                <div className="extra-fancy-plan plan-info">
                    <h4></h4>
                    <ul>
                        <li>something</li>
                        <li>about</li>
                        <li>this</li>
                    </ul>
                    <div className="plan-start">
                        <a href="/signup" className="get-started">></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


