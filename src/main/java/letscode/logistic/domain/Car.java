package letscode.logistic.domain;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
@Entity
public class Car implements ComboListItem {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @ManyToOne
    @JsonIdentityReference
    @JsonSerialize(as = ComboListItem.class)
    private Model model;

}
