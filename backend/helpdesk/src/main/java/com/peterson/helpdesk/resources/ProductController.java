package com.peterson.helpdesk.resources;

import com.peterson.helpdesk.domain.Image;
import com.peterson.helpdesk.domain.Product;
import com.peterson.helpdesk.domain.dtos.ProductRequestDTO;
import com.peterson.helpdesk.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = "/product")
public class ProductController {
    private final ProductService productService;
    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    @GetMapping
    public ResponseEntity<List<Product>>  getAllProduct(){
        return ResponseEntity.status(HttpStatus.OK)
                .body(productService.findAll());
    }
    @PostMapping
    public ResponseEntity<List<Product>> saveProduct(@RequestParam ProductRequestDTO productRequestDTO, @RequestParam("image") MultipartFile file) throws IOException {
        List<Product> products = productService.createOrUpdateProduct(productRequestDTO, file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(products);
    }
    @GetMapping("/info/{name}")
    public ResponseEntity<?>  getImageInfoByName(@PathVariable("name") String name){
        Image image = productService.getInfoByImageByName(name);
        return ResponseEntity.status(HttpStatus.OK)
                .body(image);
    }
}
