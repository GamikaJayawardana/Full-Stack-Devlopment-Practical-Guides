package com.lib.LiMS.repository;

import com.lib.LiMS.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends MongoRepository<Book, String> {

    List<Book> findByPublicationYear(int publicationYear);

    Optional<Book> findGenreById(String id);

    @Transactional
    void deleteByPublicationYear(int publicationYear);
}
