package letscode.logistic.controller;

import letscode.logistic.domain.Model;
import letscode.logistic.repo.ModelRepo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/model")
public class ModelRestController extends AbstractRestController<Model,ModelRepo> {
    public ModelRestController(ModelRepo repo) {
        super(repo);
    }
}
