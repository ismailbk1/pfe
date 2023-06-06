package tn.MySpringBootProject.spring.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tn.MySpringBootProject.spring.AuthREquest.LoginRequest;
import tn.MySpringBootProject.spring.Service.AdminService;
import tn.MySpringBootProject.spring.Service.BabysitterService;
import tn.MySpringBootProject.spring.Service.ParentService;
import tn.MySpringBootProject.spring.entity.Parent;
import tn.MySpringBootProject.spring.entity.admin;
import tn.MySpringBootProject.spring.entity.babysitter;

import javax.servlet.http.HttpSession;

@Slf4j
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    AdminService adminService;
    @Autowired
    BabysitterService babysitterService;

    @Autowired
    ParentService parentService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthController(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpSession httpSession) {
        String role = loginRequest.getRole();

        if ("admin".equals(role)) {
            // Fonction de connexion pour l'administrateur
            // Vérifier les informations d'identification de l'admin
            admin admin = adminService.findByEmail(loginRequest.getEmail());
            log.info("inside the admin login {}", loginRequest);
            if (admin == null ||  !this.passwordEncoder.matches(loginRequest.getPassword(), admin.getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
            }

            // Stocker l'admin connecté dans la session
            httpSession.setAttribute("user", admin);

            return ResponseEntity.ok(admin);
//login Babysitter
        } else if ("babysitter".equals(role)) {
            babysitter babysitter = babysitterService.findByEmail(loginRequest.getEmail());
            log.info("inside the babysitter login {}", loginRequest);
            if (babysitter == null || !this.passwordEncoder.matches(loginRequest.getPassword(), babysitter.getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
            }
            httpSession.setAttribute("user", babysitter);
            return ResponseEntity.ok(babysitter);


            //login parent
        } else if ("parent".equals(role)) {
            Parent parent = parentService.findByEmail(loginRequest.getEmail());
            log.info("inside the parent login {}", loginRequest);
            if (parent == null || !this.passwordEncoder.matches(loginRequest.getPassword(), parent.getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
            }
            // Stocker l'parent connecté dans la session
            httpSession.setAttribute("user", parent);

            return ResponseEntity.ok(parent);
        } else {
            // Rôle invalide, retourner une réponse d'erreur appropriée
            return ResponseEntity.badRequest().body("Invalid role");
        }


    }

}
