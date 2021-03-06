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
    public Recepie create(@RequestParam("file") MultipartFile file, @RequestParam("body") String body,
            @RequestParam("name") String name, @RequestParam("ingredients") String ingredients,
            @RequestParam("preparation") String preparation, @RequestParam("prepTime") String prepTime)
            throws IOException {
        Recepie recepie = new Recepie();
        recepie.setBody(body);
        recepie.setName(name);
        recepie.setIngredients(ingredients);
        recepie.setPrepTime(prepTime);
        recepie.setPreparation(preparation);
        recepie.setImg(file.getBytes());
        return recepieService.save(recepie);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        recepieService.deleteById(id);
    }

    @GetMapping("")
    public List<Recepie> getAll() {
        return recepieService.getAll();
    }

    @PutMapping("")
    public Recepie update(@RequestBody Recepie updatedRecipe) throws Exception {
        return recepieService.update(updatedRecipe);
    }

}
