import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants';
import './About.scss'
import { urlFor, client } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([])
  const imgUrl = {
      "asset": {
          "_type": "reference",
          "_ref": "image-90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900-png"
      },
      "_type": "image"
  }
  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then((data) => {
      console.log('about data:',data)
      
      setAbouts(data)
    }).catch(err=>{
      console.log('error : ',err)
    })
  }, [])
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span> <br />
        means <span>Good Developer</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}>
            <img src={urlFor(about.imgUrl||imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title||""}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description||""}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app_whitebg')
