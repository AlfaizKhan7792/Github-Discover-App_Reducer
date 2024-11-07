// import React, { useContext } from 'react'
// import Cards from '../components/Cards'
// import CardDataContext from '../providers/cardData/CardDataContext'
// import { Box, Skeleton } from '@mui/material'

// const Card = () => {

//   const {Details} = useContext(CardDataContext)
//   console.log("Details from Context:", Details);

//   return (
//     <div>
//      {
//      Details.length === 0 ? (
//       <Box>
// <Skeleton variant="circular" width={60} height={60} sx={{ marginBottom: "10px" }} />
// <Skeleton variant="text" width="60%" height={30} sx={{ marginTop: "10px" }} />
// <Skeleton variant="text" width="40%" height={20} sx={{ marginTop: "5px" }} />
// </Box>
//      ) : (
//       Details?.map((card) => <Cards key={card.id} {...card} />)
//      )
//      }
//     </div>
//   )
// }

// export default Card


// In Chat-GPT


import React, { useContext, useEffect } from 'react'
import Cards from '../components/Cards'
import CardDataContext from '../providers/cardData/CardDataContext'
import { Box, Skeleton } from '@mui/material'

const Card = () => {

  const { Details } = useContext(CardDataContext)
  
  useEffect(()=> {
    console.log("Details from Context:", Details);
  },[])

  return (
    <div>
      {
        !Details ? (
          <Box>
            <Skeleton variant="circular" width={60} height={60} sx={{ marginBottom: "10px" }} />
            <Skeleton variant="text" width="60%" height={30} sx={{ marginTop: "10px" }} />
            <Skeleton variant="text" width="40%" height={20} sx={{ marginTop: "5px" }} />
          </Box>
        ) : (
          <Cards key={Details.id} {...Details} />
        )
      }
    </div>
  )
}

export default Card
