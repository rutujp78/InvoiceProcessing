package com.invoceprocessing.server.controller;

import com.invoceprocessing.server.model.Invoice;
import com.invoceprocessing.server.services.InvoiceService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class InvoiceController {

    // Since we cannot create an object of interface
    @Autowired
    InvoiceService invoiceService;

    // Returns response to frontend
    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice) {
        return this.invoiceService.addInvoice(invoice);
    }

    @GetMapping("/invoice")
    public List<Invoice> getInvoice() {
        return this.invoiceService.getInvoice();
    }

    @DeleteMapping("/invoice/{invoiceId}")
    public Invoice deleteInvoice(@PathVariable String invoiceId) {
         return this.invoiceService.deleteInvoice(Long.parseLong(invoiceId));
    }
}
