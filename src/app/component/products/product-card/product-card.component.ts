import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {



  hs = [
    {
      name: "Hair",
      img: "https://cdn-icons-png.flaticon.com/512/10033/10033281.png",
    },
    {
      name: "Nail",
      img: 'https://cdn-icons-png.flaticon.com/512/2437/2437898.png'
    },
    {
      name: "Skin",
      img: 'https://cdn-icons-png.flaticon.com/512/2763/2763315.png'
    },
    {
      name: 'All',
      img: 'https://cdn-icons-png.flaticon.com/512/1005/1005661.png'
    }
  ]


  products: any[] = [
    //hair products
    {
      name: 'Shampoo for Healthy Hair',
      description: 'Gently cleanses and nourishes your hair, leaving it shiny and healthy.',
      price: '$12.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shampoo/x/j/8/-original-imagrzrjhcsjkn2h.jpeg?q=70',
      category: 'Hair',
    },
    {
      name: 'Hair Conditioner',
      description: 'Restores moisture to dry and damaged hair, making it soft and manageable.',
      price: '$9.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/conditioner/8/v/t/-original-imagkycygx4bx6pf.jpeg?q=70',
      category: 'Hair',
    },
    {
      name: 'Hair Styling Gel',
      description: 'Provides a strong hold for your hairstyles, without flaking or stickiness.',
      price: '$8.49',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hair-styling/3/e/e/-original-imagkcebchngczgm.jpeg?q=70',
      category: 'Hair',
    },
    {
      name: 'Hair Brush Set',
      description: 'A set of high-quality brushes for detangling and styling your hair.',
      price: '$19.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/ktketu80/hair-brush/3/y/c/rectangular-cushion-paddle-hair-brush-large-paddle-cushion-hair-original-imag6vs3y2d9hzyc.jpeg?q=70',
      category: 'Hair',
    },
    {
      name: 'Hair Serum',
      description: 'Nourishes and revitalizes your hair, reducing frizz and improving shine.',
      price: '$14.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hair-serum/2/u/d/-original-imagspebzdnvfdjg.jpeg?q=70',
      category: 'Hair',
    },
    {
      name: 'Hair Dryer',
      description: 'A powerful and efficient hair dryer for quick drying and styling.',
      price: '$34.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/ktn9pjk0/hair-dryer/n/l/0/silky-shine-hot-and-cold-foldable-nhp-8100-05-nova-original-imag6y7wdgzhc3nh.jpeg?q=70',
      category: 'Hair',
    },
    {
      name: 'Hair Clips and Pins Set',
      description: 'A variety of clips and pins for styling your hair in different ways.',
      price: '$7.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hair-accessory/u/b/k/-original-imagqhqpar3kxhqd.jpeg?q=70',
      category: 'Hair',
    },
    {
      name: 'Hair Mask for Deep Conditioning',
      description: 'Intensive treatment for restoring and strengthening your hair.',
      price: '$16.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hair-treatment/9/h/x/200-patu-keratin-strengthening-hair-mask-with-sacha-inchi-for-original-imagk7utktrheky8.jpeg?q=70',
      category: 'Hair',
    },
    //nail products
    {
      name: 'Nail Polish Set',
      description: 'A collection of vibrant nail polish colors for any occasion.',
      price: '$14.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/kyxb9u80/nail-polish/2/s/v/19-8-ultra-lasting-glow-shine-nail-polish-combo-3-volo-original-imagbfrkydnnx3dm.jpeg?q=70',
      category: 'Nail',
    },
    {
      name: 'Nail File and Buffer Kit',
      description: 'A set of high-quality nail files and buffers for perfect nails.',
      price: '$7.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/l1zc6fk0/nail-filer/j/r/6/4-nail-filer-and-buffer-double-sided-nail-file-nail-shaper-original-imagdf6gzzypxgz8.jpeg?q=70',
      category: 'Nail',
    },
    {
      name: 'Nail Art Stickers',
      description: 'Decorate your nails with a variety of stylish and fun stickers.',
      price: '$5.49',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/nail-art/x/v/t/15-sheets-flowers-and-mix-nail-stickers-black-sofire-original-imagrvetckcgzucc.jpeg?q=70',
      category: 'Nail',
    },
    {
      name: 'Cuticle Oil Pen',
      description: 'Nourishes and softens cuticles, keeping your nails healthy and strong.',
      price: '$9.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/kosxzm80/body-skin-treatment/d/4/v/15-nail-art-cutical-oil-set-of-15pcs-multicolour-nail-oil-original-imag36munpgydqzs.jpeg?q=70',
      category: 'Nail',
    },

    //skin products
    {
      name: 'Moisturizing Cream',
      description: 'Hydrates and nourishes your skin, leaving it soft and supple.',
      price: '$16.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/moisturizer-cream/c/n/m/-original-imagusxnzb6w78ht.jpeg?q=70',
      category: 'Skin',
    },
    {
      name: 'Sunscreen Lotion',
      description: 'Provides protection from harmful UV rays and prevents sunburn.',
      price: '$12.49',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sunscreen/g/m/r/50-sunblock-lotion-50-ml-30-aroma-magic-original-imagtmn4gghnrnnu.jpeg?q=70',
      category: 'Skin',
    },
    {
      name: 'Facial Cleanser',
      description: 'Gently cleanses your skin, removing impurities and makeup.',
      price: '$10.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/face-wash/u/b/m/-original-imagtzdzzqqfnfkq.jpeg?q=70',
      category: 'Skin',
    },
    {
      name: 'Anti-Aging Serum',
      description: 'Reduces the appearance of wrinkles and fine lines, promoting youthful skin.',
      price: '$24.99',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fairness/7/6/7/30-vitamin-c-face-serum-skin-brightening-serum-anti-aging-skin-original-imagnbfcz4eyzx3c.jpeg?q=70',
      category: 'Skin',
    },
  ];
  selectedCategory: string = "All";

  filterProducts(category: string): void {
    this.selectedCategory = category;
  }

  get filteredProducts(): any[] {
    if (this.selectedCategory === "All") return this.products;
    return this.selectedCategory
      ? this.products.filter(product => product.category === this.selectedCategory)
      : this.products;
  }
}
