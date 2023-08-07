import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { FC } from 'react';
import { api } from '../api';

export interface ProductProps {
    id: string;
    product: {
        id: string;
        name: string;
        price: number;
    }
    quantity: number;
}

const buyProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.buy(event.currentTarget.dataset.slot, "sam")
  };


export const Product = ({ id, title, stock, price }: any) => {
    return (
        <Grid item xs={3} component="form" data-slot={id} onSubmit={buyProduct} sx={{
            textAlign: "center",
        }}>
            <Box border={2} padding={2}>
                <Box sx={{ fontSize: 21, fontWeight: 800}}>{title}</Box>
                <Box>Stock: {stock}</Box>
                <Box>Price: {price}€</Box>
            </Box>
            <Button
                variant="contained"
                sx={{marginTop: 3}}
                type="submit"
            >Buy</Button>
        </Grid>
    )
}

export const Products: FC<ProductProps[] | any> = ({products}) => {
    return (
        <Grid sx={{margin: 10}} container gap={5}>
            {products.map((product: ProductProps) => (
                <Product id={product.id} title={product.product.name} stock={product.quantity} price={product.product.price} />
            ))}
        </Grid>
    )
}
