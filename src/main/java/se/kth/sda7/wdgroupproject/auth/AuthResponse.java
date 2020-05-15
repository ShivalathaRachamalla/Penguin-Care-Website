package se.kth.sda7.wdgroupproject.auth;

public class AuthResponse {
    private String token;
    private String displayName;


    public AuthResponse(String token, String name) {
        this.token = token;
        this.displayName = name;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String name) {
        this.displayName = name;
    }

}
