package se.kth.sda7.wdgroupproject.recepies;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecepieService {

    @Autowired
    public RecepieRepository repository;

    public List<Recepie> getAll() {

            return repository.findAll();
    }


    public Recepie save(Recepie newRecepie) {
        return repository.save(newRecepie);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    public Recepie update(Recepie recepie) throws Exception {
        return repository.findById(recepie.getId()).map(r -> {
            return repository.save(recepie);
        }).orElseThrow(() -> new Exception("Recipe not found"));
    }
}
