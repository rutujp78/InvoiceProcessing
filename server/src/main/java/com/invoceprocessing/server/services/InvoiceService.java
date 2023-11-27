package com.invoceprocessing.server.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.invoceprocessing.server.model.Invoice;

// For app to indentify that it is a service
@Service
public interface InvoiceService {
    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoice();

    public Invoice deleteInvoice(Long id);
}
