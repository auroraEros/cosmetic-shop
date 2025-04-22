import { FC } from 'react'
import CategoryElement from './ui/CategoryElement';

type CategorySectionProps= {
  
}

const CategorySection: FC<CategorySectionProps> = ({  }) => {
  return (
    <section className="py-12 px-4  md:mb-20 md:py-16 md:px-8">
        <div className=" flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-8  items-center">
            <CategoryElement
              href="/categories/lips"
              src="/images/lips.jpg"
              categoryType="Lips Makeup"
            />

            <CategoryElement
              href="/categories/eyes"
              src="/images/eyes.jpg"
              categoryType="Eyes Makeup"
            />
            <CategoryElement
              href="/categories/Face"
              src="/images/face.jpg"
              categoryType="Face Makeup"
            />

            <CategoryElement
              href="/categories/skin-care"
              src="/images/skin-care.jpg"
              categoryType="Skin Care"
            />

            <CategoryElement
              href="/categories/fragrance"
              src="/images/fragrance.jpg"
              categoryType="Fragrance"
            />
          </div>
        </div>
      </section>
  )
}

export default CategorySection;