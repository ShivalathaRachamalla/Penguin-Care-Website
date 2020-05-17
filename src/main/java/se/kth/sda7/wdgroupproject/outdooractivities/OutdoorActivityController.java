package se.kth.sda7.wdgroupproject.outdooractivities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import se.kth.sda7.wdgroupproject.outdooractivities.OutdoorActivity;
import se.kth.sda7.wdgroupproject.outdooractivities.OutdoorActivityService;

import java.io.IOException;
import java.util.List;

        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.*;
        import org.springframework.web.multipart.MultipartFile;

        import java.io.IOException;
        import java.util.List;

@RestController
@RequestMapping("/outdooractivities")

public class OutdoorActivityController {

    @Autowired
    public OutdoorActivityService OutdoorActivityService;

    @PostMapping("")
    public OutdoorActivity create(@RequestParam("file") MultipartFile file, @RequestParam("body") String body) throws IOException {
        OutdoorActivity  outdooractivity = new OutdoorActivity();
        outdooractivity.setBody(body);
        outdooractivity.setImg(file.getBytes());
        return OutdoorActivityService.save(outdooractivity);
    }



    @GetMapping("")
    public List<OutdoorActivity> getAll(){ return OutdoorActivityService.getAll();
    }


}
