const data = [
  {
    label: "Manufacturing",
    value: "Manufacturing",
    children: [
      {
        label: "Contruction materials",
        value: "Construction materials"
      },
      {
        label: "Electronics and optics",
        value: "Electronics and optics"
      },
      {
        label: "Food and beverage",
        value: "Food and beverage",
        children: [
          {
            label: "Bakery & confectionary products",
            value: "Bakery & confectonary products"
          },
          {
            label: "Beverages",
            value: "Beverages"
          },
          {
            label: "Fish & fish products",
            value: "Fish & fish products"
          },
          {
            label: "Meat & meat products",
            value: "Meat & meat products"
          },
          {
            label: "Milk & diary products",
            value: "Milk & diary products"
          },
          {
            label: "Other(food and beverage)",
            value: "Other(food and beverage)"
          },
          {
            label: "Sweets and snack food",
            value: "Sweets and snack food"
          }
        ]
      },
      {
        label: "Furniture",
        value: "Furniture",
        children: [
          {
            label: "Bathroom/sauna",
            value: "Bathroom/sauna"
          },
          {
            label: "Bedroom",
            value: "Bedroom"
          },
          {
            label: "Children's room",
            value: "Children's room"
          },
          {
            label: "Kitchen",
            value: "Kitchen"
          },
          {
            label: "Living room",
            value: "Living room"
          },
          {
            label: "Office",
            value: "Office"
          },
          {
            label: "Other(furniture)",
            value: "Other(furniture)"
          },
          {
            label: "Outdoor",
            value: "Outdoor"
          },
          {
            label: "Project furniture",
            value: "Project furniture"
          },
        ]
      },
      {
        label: "Machinery",
        value: "Machinery",
        children: [
          {
            label: "Machinery components",
            value: "Machinery components"
          },
          {
            label: "Machinery equipments/tools",
            value: "Machinery equipments/tools"
          },
          {
            label: "Manufacture of machinery",
            value: "Manufacture of machinery"
          },
          {
            label: "Maritime",
            value: "Maritime",
            children: [
              {
                label: "Aluminium and steel workboats",
                value: "Aluminium and steel workboats"
              },
              {
                label: "Boat/yatch building",
                value: "Boat/yatch building"
              },
              {
                label: "Ship repair and conversion",
                value: "Ship repair and conversion"
              },
            ]
          },
          {
            label: "Metal structures",
            value: "Metal structures"
          },
          {
            label: "Other(machinery)",
            value: "Other(machinery)"
          },
          {
            label: "Repair and maintenance services",
            value: "Repair and maintenance services"
          }
        ]
      },
      {
        label: "Metalworking",
        value: "Metalworking",
        children: [
          {
            label: "Construction of metal structures",
            value: "Construction of metal structures"
          },
          {
            label: "Houses and buildings",
            value: "Houses and buildings"
          },
          {
            label: "Metal products",
            value: "Metal products"
          },
          {
            label: "Metal works",
            value: "Metal works",
            children: [
              {
                label: "CNC-machining",
                value: "CNC-machining"
              },
              {
                label: "Forgings, fasteners",
                value: "Forgings, fasteners"
              },
              {
                label: "Gas, plasma and laser cutting",
                value: "Gas, plasma and lase cuttinf"
              },
              {
                label: "MIG, TIG, Aluminum welding",
                value: "MIG, TIG, Aluminum welding"
              }
            ]
          }
        ]
      },
      {
        label: "Plastic and rubber",
        value: "Plastic and rubber",
        children: [
          {
            label: "Packaging",
            value: "Packaging"
          },
          {
            label: "Plastic goods",
            value: "Plastic goods"
          },
          {
            label: "Plastic processing technology",
            value: "Plastic processing technology",
            children: [
              {
                label: "Blowing",
                value: "Blowing"
              },
              {
                label: "Moulding", 
                value: "Moulding"
              },
              {
                label: "Plastic welding and processing",
                value: "Plastic welding and processing"
              }
            ]
          },
          {
            label: "Plastic profiles",
            value: "Plastic profiles"
          }
        ]
      },
      {
        label: "Printing",
        value: "Printing",
        children: [
          {
            label: "Advertising",
            value: "Advertising"
          },
          {
            label: "Book/periodicals printing",
            value: "Book/periodicals printing"
          },
          {
            label: "Labelling and packaging printing",
            value: "Labelling and packaging printing"
          }
        ]
      },
      {
        label: "Testile and clothing",
        value: "Testile and clothing",
        children: [
          {
            label: "Clothing",
            value: "Clothing"
          },
          {
            label: "Textile",
            value: "Textile"
          }
        ]
      },
      {
        label: "Wood",
        value: "Wood",
        children: [
          {
            label: "Other(wood)",
            value: "Other(wood)"
          },
          {
            label: "Wooden building materials",
            value: "Wooden building materials"
          },
          {
            label: "Wooden houses",
            value: "Wooden houses"
          }
        ]
      }
    ]
  },
  {
    label: "Other",
    value: "Other",
    children: [
      {
        label: "Creative industries",
        value: "Creative industries"
      },
      {
        label: "Energy technology",
        value: "Energy technology"
      },
      {
        label: "Environment",
        value: "Environment"
      }
    ]
  },
  {
    label: "Service",
    value: "Service",
    children: [
      {
        label: "Business services",
        value: "Business services"
      },
      {
        label: "Engineering",
        value: "Engineering"
      },
      {
        label: "Information Technology and Telecommunications",
        value: "Information Technology and Telecommunications",
        children: [
          {
            label: "Data processing, Web portals, E-marketing",
            value: "Data processing, Web portals, E-marketing"
          },
          {
            label: "Programming, Consultancy",
            value: "Programming, Consultancy"
          },
          {
            label: "Software, hardware",
            value: "Software, hardware"
          },
          {
            label: "Telecommunications",
            value: "Telecommunications"
          }
        ]
      },
      {
        label: "Tourism",
        value: "Tourism"
      },
      {
        label: "Translation services",
        value: "Translation services"
      },
      {
        label: "Transport and logistics",
        value: "Transport and logistics",
        children: [
          {
            label: "Air",
            value: "Air"
          },
          {
            label: "Rail",
            value: "Rail"
          },
          {
            label: "Road",
            value: "Road"
          },
          {
            label: "Water",
            value: "Water"
          }
        ]
      }
    ]
  }
]

export default data;
