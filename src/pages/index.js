import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroSlider from '../components/index/HeroSlider'
import CTAImages from '../components/index/CTAImages'
import LatestTrend from '../components/index/LatestTrend'
import Citat from '../components/index/Citat'
import Intro from '../components/index/Intro'

const IndexPage = () => (
<Layout>

    <SEO title="Home" />
   
    <HeroSlider />
    <div
  data-sal="flip-right"
  data-sal-delay="300"
  data-sal-duration="20s"
  data-sal-easing="ease"
>
    <h1 style={{ textAlign: "center" }}>LEARN HOW WE CAN HELP YOU</h1>
 </div>

    <CTAImages />

<div
  data-sal="fade"
  data-sal-delay="300"
  data-sal-duration="60s"
  data-sal-easing="ease"
>
    <LatestTrend />
</div> 
<div
  data-sal="fade"
  data-sal-delay="400"
  data-sal-duration="30s"
  data-sal-easing="ease"
>
    <Citat />
 </div>
 <div
  data-sal="slide-up"
  data-sal-delay="300"
  data-sal-duration="30s"
  data-sal-easing="ease"
>
    <Intro />
</div>
 </Layout>
)

export default IndexPage
