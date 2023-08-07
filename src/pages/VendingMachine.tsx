import { FC, useState } from "react"
import { api } from "../api"
import { Layout } from "../components/Layout"
import { Products } from "../components/Products"


export const VendingMachine: FC = () => {
    const [products, setProducts] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useState(() => {
        const fetchProducts = async () => {
        try {
            setLoading(true);
            const response: any = await api.getProducts();
            setProducts(response.data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
        };

        fetchProducts();
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error != null) {
        return <div>Error: {error}</div>;
    }

	return (
        <Layout>
            <Products products={products} />
        </Layout>
    )
}