package letscode.logistic.controller;

import letscode.logistic.domain.Car;
import letscode.logistic.repo.CarRepo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/car")
public class CarRestController extends AbstractRestController<Car,CarRepo> {

    public CarRestController(CarRepo repo) {
        super(repo);
    }
}
