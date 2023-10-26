import PropTypes from 'prop-types';
import React from 'react';
import { Name } from '@components/frontStore/catalog/product/list/item/Name';
import Area from '@components/common/Area';
import { Price } from '@components/frontStore/catalog/product/list/item/Price';
import '@components/frontStore/catalog/product/list/item/ProductDetail.scss';

function ProductDetail({ product }) {
  return (
    <div className="product-detail-listing">
        <div className="p-[9.52px] bg-blue-900 justify-center items-center gap-[4.76px] inline-flex">
<div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-[20.82px]">Deadline</div>
</div>
        <Area 
            coreComponents={[
                {
                    component: { default: Name },
                    props: { name: product.name, url: product.url, id: product.productId },
                    sortOrder: 20,
                    id: 'name'
                  },
                  {
                    component: { default: Price },
                    props: { ...product.price },
                    sortOrder: 30,
                    id: 'price'
                  },
            ]}
        />
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    sku: PropTypes.string,
    productId: PropTypes.number,
    url: PropTypes.string,
    price: PropTypes.shape({
      regular: PropTypes.shape({
        value: PropTypes.number,
        text: PropTypes.string
      }),
      special: PropTypes.shape({
        value: PropTypes.number,
        text: PropTypes.string
      })
    }),
    image: PropTypes.shape({
      alt: PropTypes.string,
      listing: PropTypes.string
    })
  }).isRequired,
};

export { ProductDetail };
