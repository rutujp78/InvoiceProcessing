package com.invoceprocessing.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.invoceprocessing.server.dao.InvoiceDao;
import com.invoceprocessing.server.model.Invoice;

@Service
public class InvoiceServiceImpl implements InvoiceService{
    
    @Autowired
    InvoiceDao invoiceDao;

    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoiceDao.save(invoice);
        return invoice;
    }

    @Override
    public List<Invoice> getInvoice() {
        return invoiceDao.findAll();
    }

    @Override
    public Invoice deleteInvoice(Long id) {
        Invoice invoice = invoiceDao.findById(id).get();
        invoiceDao.delete(invoice);
        return invoice;
    }

    // DAO -> DataBase Access Object
}
