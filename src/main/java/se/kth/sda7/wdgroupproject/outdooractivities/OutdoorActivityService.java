package se.kth.sda7.wdgroupproject.outdooractivities;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import se.kth.sda7.wdgroupproject.outdooractivities.OutdoorActivity;
import se.kth.sda7.wdgroupproject.outdooractivities.OutdoorActivityRepository;

import java.util.List;

@Service
public class OutdoorActivityService {

    @Autowired
    public OutdoorActivityRepository repository;

    public List<OutdoorActivity> getAll() {

        return repository.findAll();
    }


    public OutdoorActivity save(OutdoorActivity newOutdoorActivity) {
        return repository.save(newOutdoorActivity);
    }
}

