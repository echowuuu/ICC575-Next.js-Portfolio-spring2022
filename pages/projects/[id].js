import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import Paragraph from "../../components/Paragraph";
import Image from "next/image";
import Link from "next/link";


import {getAllProjectSlugs,getSingleProjectData} from '../../lib/api'

export async function getStaticPaths(){
    const paths = await getAllProjectSlugs();
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}) {
    const projectsData = await getSingleProjectData (params.id);
    return{
        props:{
            projectsData
        }
    }
}

const SingleProjectPage = ({projectsData}) => {
    //console.log({projectsData});
    const {title,featureimage,content} = projectsData;
    return <Layout>
        <Container>
            {featureimage &&
                <Image
                src={featureimage.node.sourceUrl}
                alt={featureimage.node.altText}
                width={featureimage.node.mediaDetails.width}
                height={featureimage.node.mediaDetails.height}
             />
            }
          
        <Heading level="1">{title}</Heading>
        <div dangerouslySetInnerHTML={{__html: content}}/>
        <Paragraph>
            <Link href="/projects"> 
            <a>
            Back to all Projects
            </a >
            </Link>
            </Paragraph>
        </Container>
    </Layout>
}
export default SingleProjectPage;