package com.invoceprocessing.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.invoceprocessing.server.model.Invoice;

// This interface saves mysql data
// What does JpaRepo take DB Model and Primary Key
public interface InvoiceDao extends JpaRepository<Invoice, Long> {
    // jpa -> java persistence api
}
