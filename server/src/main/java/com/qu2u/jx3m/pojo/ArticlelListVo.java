package com.qu2u.jx3m.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ArticlelListVo implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private Integer id;

    private String title;

    private String submap;

    private String cover;

    private String profile;

    private String map;
}
