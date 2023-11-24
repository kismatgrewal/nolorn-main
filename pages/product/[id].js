import PageSEO from "../../components/common/PageSEO";
import BackToPageSignUp from "../../components/product/BackToPageSignUp";
import Fruit from "../../components/product/Fruit";
import ProductDescriptionReviews from "../../components/product/ProductDescriptionReviews";
import PromotionalGoods from "../../components/product/PromotionalGoods";
import RelatedProducts from "../../components/product/RelatedProducts";
import Layout from "../../hoc/Layout";

const ProductDetailsPage = () => {
  return (
    <>
      <PageSEO title="Product" />
      <Layout>
        <Fruit />
        <ProductDescriptionReviews />
        <RelatedProducts />
        <PromotionalGoods />
        <BackToPageSignUp />
      </Layout>
    </>
  );
};

export default ProductDetailsPage;
