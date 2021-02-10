package com.hb.users.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


import lombok.Data;

@Entity
@Data
public class Users {
	
	@Id
	@Column
    private long id;

    @Column
    @NotNull(message="{NotNull.User.firstName}")
    private String firstName;
    
    @Column
    @NotNull(message="{NotNull.User.lastName}")
    private String lastName;

    @Column
    @NotNull(message="{NotNull.User.age}")
    private String age;
    
    @Column
    @NotNull(message="{NotNull.User.pinCode}")
    private String pinCode;
    
    @Column
    @NotNull(message="{NotNull.User.email}")
    private String email;

}
