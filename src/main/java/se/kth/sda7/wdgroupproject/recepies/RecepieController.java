package se.kth.sda7.wdgroupproject.recepies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recepies")

public class RecepieController {

    @Autowired
    public RecepieService recepieService;

    @PostMapping("")
    public Recepie create(@RequestBody Recepie newRecepie){
        return recepieService.save(newRecepie);
    }



    @GetMapping("")
    public List<Recepie> getAll(){ return recepieService.getAll();
    }


}
