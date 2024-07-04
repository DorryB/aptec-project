import React from "react";
import {Document,Page,Text, View, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page:{
        flexDirection: "column",
        margin: 10,
    },
    item:{
        marginBottom:10,
    },
    title:{
        fontSize:16,
        fontWeight:"bold",
    },
    description:{
        fontSize:12,
    },
    price:{
        fontSize:14,
        fontWeight:"bold",
    },
});


export default function PriceListPDF(props){
    if(!props.items || !props.items.length){
        return <Text>Товары отсутствуют!</Text>
    }

    return(
        <Document>
            <Page size={"A4"} style={styles.page}>
                {props.items.map((el)=>(
                    <View key={el.id} style={styles.item}>
                        <Text style={styles.title} unicode={true}>{el.title}</Text>
                        <Text style={styles.description} unicode={true}>{el.desc}</Text>
                        <Text style={styles.price} unicode={true}>{el.price}</Text>
                    </View>
                ))}
            </Page>
        </Document>
    );
}