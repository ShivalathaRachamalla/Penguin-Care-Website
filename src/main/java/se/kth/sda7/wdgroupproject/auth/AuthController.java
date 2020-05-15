package se.kth.sda7.wdgroupproject.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import se.kth.sda7.wdgroupproject.user.User;
import se.kth.sda7.wdgroupproject.user.UserService;

@RestController
public class AuthController {
    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
       String originalPassword = user.getPassword();
        userService.register(user);


        String token = authService.authenticate(user.getEmail(), originalPassword);
        String displayName = authService.getLoggedInUserName();
        AuthResponse authResponse = new AuthResponse(token,displayName);

        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthRequest authRequest) {
        try {
            String token = authService.authenticate(authRequest.getEmail(), authRequest.getPassword());
            String displayName = authService.getLoggedInUserName();
            AuthResponse authResponse = new AuthResponse(token,displayName);

            return new ResponseEntity<>(authResponse, HttpStatus.OK);
        } catch (AuthenticationException authenticationException) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
