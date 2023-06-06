package tn.MySpringBootProject.spring.entity;

import lombok.Data;

import java.util.Date;
@Data
public class RservationRequest {

    private String cordParent;

    private Date dateD ;
    private Date dateF ;
    private String menage ;
    private Integer prix ;
    private int ageE ;
    private int nbr_enfant ;
    private String tel ;
    private ReservationStatus statut;

    private Long parentid ;

    private Long babysitterid ;


}
