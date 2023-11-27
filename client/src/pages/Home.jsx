import Header from "../components/Header";
import { Box, Typography, Button } from "@mui/material";
import AddInvoice from "../components/AddInvoice";
import { useEffect, useState } from "react";
import Invoices from "../components/Invoices";
import { getAllInvoice, deleteInvoice } from "../services/api";

const Home = () => {
    const [addInvoice, setAddInvoice] = useState(false);
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await getAllInvoice();
            setInvoices(response.data);
        }

        getData();
    }, [addInvoice])

    const toggleInvoice = () => {
        setAddInvoice(true);
    }

    const removeInvoice = async (id) => {
        await deleteInvoice(id);

        const updatedInvoice = invoices.filter(invoice => invoice.id != id);
        setInvoices(updatedInvoice);
    }

    return (
        <>
            {/* React.Fragment are faster, takes less memory and dosent get added in DOM then div */}
            {/* Latest syntax of <React.Fragmer></React.Fragmer> => <></> */}
            <Header />
            <Box style={{ margin: 20 }}>
                {/* Typography => p tag in HTML */}
                <Typography variant="h4">Pending Invoices</Typography> 
                { !addInvoice && 
                    <Button
                        variant="contained"
                        style={{ marginTop: 15 }}
                        onClick={() => toggleInvoice()}
                    >
                        Add Invoice
                    </Button>
                }
                { addInvoice && <AddInvoice setAddInvoice={setAddInvoice} /> }
                <Box>
                    <Invoices 
                        invoices={invoices}
                        removeInvoice={removeInvoice}
                    />
                </Box>
            </Box>
        </>
    )
}

export default Home;