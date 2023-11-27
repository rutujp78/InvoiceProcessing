import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";
import { saveInvoice } from "../services/api";
import PropTypes from 'prop-types'

const BoxComponent = styled(Box)({
    marginTop: 20,
    // To access child and typography is basically a <p> tag so its css is as follows
    '& > p': {
        fontSize: 26,
        marginBottom: 10 
    },
    // for div inside div
    '& > div > div': {
        marginRight: 20,
        minWidth: 200,
    }
})

const defaultObj = {
    vendor: "",
    product: "",
    amount: 0,
    date: "",
    action: "pending"
}

const AddInvoice = ({ setAddInvoice }) => {
    const [invoice, setInvoice] = useState(defaultObj);

    const onChangeValue = (e) => {
        setInvoice({ ...invoice, [e.target.name] : e.target.value });
    }

    const addNewInvoice = async () => {
        await saveInvoice({ ...invoice, amount: Number(invoice['amount']) });
        setAddInvoice(false);
    }

    return (
        <BoxComponent>
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField 
                    variant="standard"
                    placeholder="Enter vendor name"
                    onChange={(e) =>  onChangeValue(e)}
                    name="vendor"
                    autoComplete="off"
                />
                <TextField 
                    variant="standard"
                    placeholder="Enter product name"
                    onChange={(e) => onChangeValue(e)}
                    name="product"
                    autoComplete="off"
                    />
                <TextField 
                    variant="standard"
                    placeholder="Enter amount (in Rs)"
                    type="number"
                    onChange={(e) => onChangeValue(e)}
                    name="amount"
                    autoComplete="off"
                    />
                <TextField 
                    variant="standard"
                    placeholder="Enter date"
                    type="date"
                    onChange={(e) => onChangeValue(e)}
                    name="date"
                    autoComplete="off"
                />
                <Button
                    variant="contained"
                    onClick={() => addNewInvoice()}
                >
                    Add Invoice
                </Button>
            </Box>
        </BoxComponent>
    );
}

AddInvoice.propTypes = {
    setAddInvoice: PropTypes.func.isRequired,
}

export default AddInvoice;