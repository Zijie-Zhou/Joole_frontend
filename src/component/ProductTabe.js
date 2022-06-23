import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import { Slider } from '@mui/material';
import ProductFilter from './ProductFilter';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid, Item } from '@mui/material';


const ProductTabe = () => {

    const [product, setProduct] = useState([]);
   
    const user = useSelector((state) => state.user.value);

    function getProduct() {
        let token = user.token;

        console.log(token);

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios
            .get('http://localhost:8080/product/findall_product', config)
            .then(res => {
                if (res.data.type != undefined && res.data.type == "error") {
                    alert(Object.values(res.data.error)[0]);
                } else {
                    setProduct(res.data);
                    console.log(res.data);
                }
            })
            .catch(err => { alert(err); });

           

    }


    useEffect(() => {
        getProduct();
    }, []);


    return (
        <div className="App" style={{ marginTop: "20px" }}>




            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <ProductFilter />

                </Grid>
                {product.map((option) => (

                     <Grid item xs={2}>

                     <Card sx={{ maxWidth: 300 }}>
                         <CardActionArea>
                             <CardMedia
                                 component="img"
                                 height="120"
                                 image={process.env.PUBLIC_URL + '/fan.png'}
                                 alt="green iguana"
                             />
                             <CardContent>
                                 <Typography gutterBottom variant="h5" component="div">
                                     {option.productName}
                                 </Typography>
                                 <Typography variant="body2" color="text.secondary">
                                     brand: {option.brand}
                                     <br/>
                                     ModelYear: {option.modelYear}
                                     <br/>
                                     Airflow: {option.airflow}
                                     <br/>
                                     fanSweepDiameter: {option.fanSweepDiameter}
                                 </Typography>
                             </CardContent>
                         </CardActionArea>
                         <CardActions>
                             <Button size="small" color="primary">
                                 Add
                             </Button>
                         </CardActions>
                     </Card>
                 </Grid>

                ))}
                
                
               
            </Grid>





        </div>
    );
}

export default ProductTabe;