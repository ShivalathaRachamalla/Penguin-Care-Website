package se.kth.sda7.wdgroupproject.recepies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/recepies")

public class RecepieController {

    @Autowired
    public RecepieService recepieService;

    @PostMapping("")
    public Recepie create(@RequestParam("file") MultipartFile file, @RequestParam("body") String body) throws IOException {
        Recepie  recepie = new Recepie();
        recepie.setBody(body);
        recepie.setImg(file.getBytes());
        return recepieService.save(recepie);
    }



    @GetMapping("")
    public List<Recepie> getAll(){ return recepieService.getAll();
    }


}
