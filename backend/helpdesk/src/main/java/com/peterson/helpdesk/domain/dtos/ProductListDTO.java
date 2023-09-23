package com.peterson.helpdesk.domain.dtos;

import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
@Builder
@Getter
public class ProductListDTO {
    @NotBlank(message = "Product SKU cannot be null")
    private String sku;

    @NotBlank(message = "Title can not be blank")
    private String title;

    private String categoryName;

    @NotBlank(message = "Sort summary can not be blank")
    private String summary;

    private String imageUrl;
}
