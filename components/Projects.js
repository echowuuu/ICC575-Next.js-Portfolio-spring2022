import styles from './Projects.module.scss'

import Image from 'next/image'


export default function Projects({ items }){
    return <ul className={styles.projects}>
        {items.map((item, index) => {
            const { title, categories, featureImage, slug} = item.node;
            return<li key={index}>
                { featureImage &&
            <Image 
                src={featureImage.node.sourceUrl}
                alt={featureImage.node.altText}
                width={featureImage.node.mediaDetails.width}
                height={featureImage.node.mediaDetails.height}
                />
                }
                
                <h3>{title}</h3>
                <h4>{categories.edges[0].node.name}</h4>
                </li>

        })}

        
        </ul>
}