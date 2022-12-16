import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import About from "../components/About";
import Career from "../components/Career";
import Education from "../components/Education";

function ResumeMain()
{
    return (<section className="section" id="resume">
    <div className="container">
        <div className="columns is-multiline">
            <div className="column is-9">
                <div className="content">
                    <About />
                </div>
                <div className="content">
                    <h2 className="title">Certifications</h2>
                    <div data-iframe-width="150" data-iframe-height="270"
                        data-share-badge-id="1b8f8bd9-3dd9-41cc-8cd3-697b27280cfc"
                        data-share-badge-host="https://www.credly.com"></div>
                    <div data-iframe-width="150" data-iframe-height="270"
                        data-share-badge-id="1ed42ba5-d7fe-4191-a5cb-90f86edcd33a"
                        data-share-badge-host="https://www.credly.com"></div>
                    <div data-iframe-width="150" data-iframe-height="270"
                        data-share-badge-id="61a336e9-92a7-4c8c-aeee-a5c07bf3fae5"
                        data-share-badge-host="https://www.credly.com"></div>
                    <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                </div>
            </div>
            <div className="column is-3">
                <div className="content">
                    <Career />
                </div>
                <div className="content">
                    <Education />
                </div>
            </div>
        </div>
    </div>

</section>);
}

export default function Resume(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <main>
          <ResumeMain />
        </main>
      </Layout>
    );
  }