import { getXataClient } from "@/xata";
import { NextApiRequest, NextApiResponse } from "next";

const xata = getXataClient();

// GET: دریافت لیست برندها با صفحه‌بندی و فیلتر
async function getAllBrands(res: NextApiResponse) {
  try {
    const brands = await xata.db.brands.getMany();
    return res.status(200).json(brands);
  } catch (error) {
    return res.status(500).json({ error: "خطا در دریافت برندها" });
  }
}

// POST: ایجاد برند جدید
async function postBrand(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, brandUrl, slug } = req.body;
    const newBrand = await xata.db.brands.create({
      name,
      brandUrl,
      slug: slug,
    });
    return res.status(201).json(newBrand);
  } catch (error) {
    return res.status(500).json({ error: "Error in creating brand" });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return getBrands(req, res);
    case "POST":
      return postBrand(req, res);
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res
        .status(405)
        .json({ error: `The ${req.method} method is not allowed` });
  }
}
