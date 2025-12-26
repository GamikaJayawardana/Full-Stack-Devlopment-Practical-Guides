package com.lib.LiMS.repository;

import com.lib.LiMS.model.ERole;
import com.lib.LiMS.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
