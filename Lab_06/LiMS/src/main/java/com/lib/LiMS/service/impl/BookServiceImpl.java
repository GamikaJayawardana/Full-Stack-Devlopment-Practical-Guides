package com.lib.LiMS.service.impl;

import com.lib.LiMS.model.Book;
import com.lib.LiMS.repository.BookRepository;
import com.lib.LiMS.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {


    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book getBookById(String id) {
        Optional<Book> book = bookRepository.findById(id);
        return book.orElse(null);
        //return null or throw an exception
    }

    @Override
    public Book updateBook(String id,Book book) {
        if(bookRepository.existsById(id)){
            book.setId(id);
            return bookRepository.save(book);
        }
        return null;
    }

    @Override
    public void deleteBookById(String id) {
        bookRepository.deleteById(id);

    }

    @Override
    public List<Book> getBooksByYear(int year) {
        return bookRepository.findByPublicationYear(year);

    }

    @Override
    public Optional<String> getGenreById(String id) {
       Optional<Book> book = bookRepository.findGenreById(id);
       return book.map(Book::getGenre);
    }

    @Override
    public void deleteByYear(int publicationYear) {
        bookRepository.deleteByPublicationYear(publicationYear);

    }


}
