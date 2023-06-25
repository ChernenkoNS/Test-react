import data from '../../data.json'
import { Head } from '../Head/Head'
import css from '../Card/Card.module.css'








export const Card = ({ isOnline }) => {

  return data.map((photo) => {
  return (
  <div key={photo.id} className={isOnline ? css.red : css.blue } >
    <img 
     src={photo.url}
     alt={photo.title}
    />
    <div >
      <h5>card title:<br/>{photo.title}</h5>
      <Head className="card-title">
        <div>qwe</div>
        <div>qaqz</div>
        <div>zxc</div>
      </Head>
    <a href="http">Go somewhere</a>
  </div>
</div>
)
})
}




/////////////// модульный css//////////////

// export const Card = ({ isOnline }) => {

//     return data.map((photo) => {
//     return (
//     <div key={photo.id} className={isOnline ? css.red : css.blue } >
//       <img 
//        src={photo.url}
//        alt={photo.title}
//       />
//       <div >
//         <h5>card title:<br/>{photo.title}</h5>
//         <Head className="card-title">
//           <div>qwe</div>
//           <div>qaqz</div>
//           <div>zxc</div>
//         </Head>
//       <a href="http">Go somewhere</a>
//     </div>
//   </div>
//   )
//   })
//   }

/////////////////////// css but strap/////////////
  // export const Card = () => {
  //   return data.map((photo) => {
  //   return (<div 
  //   key={photo.id}
  //   className="card mx-auto my-2" style={{width: '18rem'}}>
  //   <img src={photo.url} className="card-img-top" alt={photo.title}/>
  //   <div className="card-body">
  //     <h5 className="card-title">card title:<br/>{photo.title}</h5>
  //    <Head className="card-title">
  //    <div>qwe</div>
  //    <div>qaqz</div>
  //    <div>zxc</div>
  //    </Head>
  //     {/* {Head('card-title')} */}
  //     <a href="http" className="btn btn-primary">Go somewhere</a>
  //   </div>
  // </div>)
  // })
  // }