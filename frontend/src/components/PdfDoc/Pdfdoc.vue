<template>
  <div class="q-pa-md">
    <q-btn @click="createPDF()" icon="print" label="Export PDF" outline color="blue" />    
    <q-table
      :dense="$q.screen.lt.md"
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>
<script>
import jsPDF from "jspdf";

export default {
  data() {
    return {
      columns: [
        {
          name: "name",
          required: true,
          label: "Dessert (100g serving)",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "calories",
          align: "center",
          label: "Calories",
          field: "calories",
          sortable: true
        },
        { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
        { name: "carbs", label: "Carbs (g)", field: "carbs" },
        { name: "protein", label: "Protein (g)", field: "protein" },
        { name: "sodium", label: "Sodium (mg)", field: "sodium" },
        {
          name: "calcium",
          label: "Calcium (%)",
          field: "calcium",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "iron",
          label: "Iron (%)",
          field: "iron",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ],
      data: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        
      ]
    };
  },
  methods: {
    createPDF() {
      let pdfName = "Laporan";
      var doc = new jsPDF();
      doc.text("Hello World", 10, 10);
      doc.rect(10, 20, 25, 25)
      doc.save(pdfName + ".pdf");
    }
  }
};
</script>