import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Congress from 'components/congress';
import Img from 'gatsby-image';

{/* Styling for a two-column flex layout for this homepage */}
const HomeWrapper = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    flex-flow: wrap;
  }
  @media only screen and (min-width: 600px) {
    flex-flow: nowrap;
  }
`

const Description = styled.h1`
  order: 1;
  width: 250px;
  margin-left: 12px;
  padding: 12px;
`
const calendarStyle = {
  border: 'solid 4px #4cc0ad',
  order: '2', /* Flex order */
}

const VideoFrame = styled.iframe`
  flex-basis: 1 1 auto;
  padding: 10px;
`

const Index = ({ data }) => (
  <Layout>
      <HomeWrapper>
        <VideoFrame title="About Environmental Enforcement Watch" width="600" height="340" src="https://www.youtube-nocookie.com/embed/k-OjWt5lBRQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></VideoFrame>
      </HomeWrapper>
    <Box>
      <div dangerouslySetInnerHTML={{__html: data.homeJson.content.childMarkdownRemark.html}}/>
      <Gallery items={data.homeJson.gallery} />
    </Box>
    
    <HomeWrapper style={{height:'500px',backgroundColor:'#4cc0ad'}}>
      <Congress />
    </HomeWrapper>

    <HomeWrapper>
      <Img fixed={data.file.childImageSharp.fixed} />
    </HomeWrapper>
    
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomeQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    file(relativePath: { eq: "images/logos/eew-icon-web.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
